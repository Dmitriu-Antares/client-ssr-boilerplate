import React, { Component } from 'react'
import { connect } from 'react-redux'

import {GlobalState} from "../../common/store";
import { getMedia, isClient } from "../../common/selectors";
import { defineClient, mediaDefintion } from "./redux/actions";
import { MEDIA } from '../../common/constans'
import { Props, State } from './types'

const mapStateToProps = ( state:GlobalState ) => ({
    media: getMedia(state),
    isClient: isClient(state)
})

const mapDispatchToProps = ( dispatch: any ) => ({
    defineCli: bool => { dispatch(defineClient(bool)) },
    setMedia: media => { dispatch(mediaDefintion(media)) }
})

@(connect(mapStateToProps, mapDispatchToProps) as any)

export default class Header extends React.Component<Props,State>{
    componentWillMount() {
        if(typeof(window) !== "undefined") {
            this.addMedia()
            window.addEventListener('resize', this.addMedia)
        }
        else {
            this.props.setMedia({
                isMobile: false,
                isDesktop: true,
                isTablet: false
            })
        }
        this.props.defineCli(typeof(window) !== "undefined")
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.addMedia)
    }

    addMedia = () => {
        const newMedia = this.checkMedia(window.innerWidth)
        this.props.setMedia(newMedia)
    }

    checkMedia = width => {
        return {
            isMobile: width <= MEDIA.mobile,
            isTablet: width > MEDIA.mobile && width <= MEDIA.tablet,
            isDesktop: width > MEDIA.tablet
        }
    }

    render(){
        const { media } = this.props
        return (
            <div>
                Header
            </div>
        )
    }
};
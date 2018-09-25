import * as React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { connect } from 'react-redux'
import routes from '../../routes'
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

export default class App extends React.Component<Props,State>{
    componentDidMount() {
        this.props.defineCli(typeof(window) !== "undefined")
    }

    componentDidUpdate(prevProps) {
        const { isClient } = this.props
        if(isClient) {
            prevProps.isClient !== isClient && this.addMedia()
            window.addEventListener('resize', this.addMedia)
        }
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
        return (
            <div>
                <h1>first ssr</h1>
                {routes.map((route,key) => (
                    // @ts-ignore
                    <Route key={key} {...route}/>
                ))}
            </div>
        )
    }
};



const html = ({body}, initialState) => `
  <!DOCTYPE html>
  <html>
      <head>
          <link href="main.css" rel="stylesheet">
      </head>      
    <body style="margin:0">
        <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
      <div id="root">${body}</div>
    </body>
    <script src="client.js" defer></script>
  </html>
`;

export default html;
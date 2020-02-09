/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  // app.on('issues.opened', async context => {
  //   const issueComment = context.issue({ body: 'Thanks for opening this issue!' })
  //   return context.github.issues.createComment(issueComment)
  // })

  app.on('pull_request.opened', async context => {
    console.log(context)
  })
}

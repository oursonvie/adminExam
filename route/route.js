FlowRouter.route('/', {
   name: 'homePage',
    action() {
        BlazeLayout.render('MainLayout', {main: 'hello'});
    }
});

FlowRouter.route('/viewquestion/:id', {
   name: 'questionviewer',
    action() {
        BlazeLayout.render('MainLayout', {main: 'questionViewer'});
    }
});

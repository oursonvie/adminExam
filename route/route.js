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

FlowRouter.route('/exammixer', {
   name: 'examMixer',
    action() {
        BlazeLayout.render('MainLayout', {main: 'examMixer'});
    }
});

FlowRouter.route('/viewexam/:id', {
   name: 'examviwer',
    action() {
        BlazeLayout.render('MainLayout', {main: 'examViewer'});
    }
});

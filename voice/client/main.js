Template.addForm.events({
'submit form': function(event){
    event.preventDefault();
    var storyVar = event.target.story.value;
    Enter.insert({
        name: storyVar,
    });
    event.target.story.value = "";
}
});

Template.addForm.helpers({
    'player': function(){
        return Enter.find();
    }
});

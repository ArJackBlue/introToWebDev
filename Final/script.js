$("#submit").on("click", function(){
    var name = $("#displayName").val();
    var words = $("#comment").val();
    $('.commentContainer').append(`
    <div class="userComment">
    <img src="Daco_2478382.png" class="profileImage" alt="">
        <h4 class="displayedUser"> </h4> <a href="#" class="edit editContainer">Edit</a>
    <a href="#" class="delete editContainer"> Delete</a>
    <p class="userPara"> </p>
  
    </div>
  `);
  var newComment = $('.commentContainer').children('.userComment:last-child');
newComment.find('.displayedUser').text(name);
newComment.find('.userPara').text(words);
  console.log((name))
  console.log((words))

  newComment.find('.delete').on("click", function(){
    $(this).closest('.userComment').remove();
  })


 newComment.find('.edit').on("click", function(){
    var commentText = $(this).closest('.userComment').find('.userPara');
    var newCommentText = prompt("Enter the edited comment")
    if(newCommentText !== null){
        commentText.text(newCommentText);
    }
 })
 $("#displayName").val("");
 $("#comment").val("");
})



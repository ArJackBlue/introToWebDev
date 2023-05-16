$("#submit").on("click", function(){
    var name = $("#displayName").val();
    var words = $("#comment").val();
    $('.commentContainer').append(`
    <div class="userComment">
    <img src="Daco_2478382.png" class="profileImage" alt="">
    <div class="displayUser">
        <h4> </h4>
    </div>
    <p class="userPara"> </p>
    <div class="editContainer">
   <a href="#" class="edit">Edit</a>
    <a href="#" class="delete"> Delete</a>
</div>
    </div>
  `);
 $(".displayUser").text((name));
 $(".userPara").text((words)); 
  console.log((name))
  console.log((words))
})
$(".edit").on("click", function(){
})
$(".delete").on("click", function(){
  var targetDelete = $(".userComment");
   $(this).addClass('itemDelete');
   $(targetDelete).remove()
})
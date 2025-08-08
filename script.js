$(function() {
  // your code here
      $('.accordion-header').on('click',function(){
        // Below will only allow to open one p
        $('.accordion-header').not(this).next('div').slideUp()
        $(this).next('div').slideToggle()
    })

    $('.todos button').on('click', function(){
      $.ajax({
        url:"https://dummyjson.com/todos",
        type:"GET",
        success: function(response){
          const todos = response.todos
          buildTodos(todos)
        },
        error: function(err){
          console.log(err)
        }
      })
    })
})

function buildTodos(arr){
  console.log(arr)
  const todoList = $('.todos ul')
  arr.forEach(element => {
    const li = $('<li></li>')
    li.text(`${element.todo}`)
    todoList.append(li)
  });

}
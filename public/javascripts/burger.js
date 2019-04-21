// Make sure we wait to attach our handlers until the DOM is fully loaded.




$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = 1;
        console.log(devoured);
        var newDevouredState = {
            "devoured": devoured
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
          type: "PUT",
          data: newDevouredState
        }).then(function() {
          console.log("changed state to", devoured);
          // Reload the page to get the updated list
          location.reload();
        });
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        let name = {"name": $("#name").val()}
        console.log(name);
        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: name
        }).then(
            function (res) {
                console.log("created new Burger", res);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});

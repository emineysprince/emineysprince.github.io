---
layout: posts
title: Submit Expression Engine Contact Form With Ajax
author: Prince Emineys
abstract: >-
  Control ExpressionEngine Default form submit behaviour and use Ajax to provide
  a better user experience
published: true
---

If you ever used ExpressionEngine on your website,then at some point you must have been annoyed by its default contact form submission action, which redirects you to this 'almost impossible to style message' telling you that your message was successfully submitted before it takes you back to your specified redirect url. A friend of mine asked me to show him how we managed to escape that 'ugliness' on our website, so i thought it would be cool to share it here as well, Here's how we managed to get it done.

Basically all computer problems get solved when you note down what needs to be done, breaking down the big problem into smaller manageable parts is how most problems get solved in programming, here's is our thought process on how we arrived to our solution.
First we need to capture the form's submit event and prevent it from doing the stuff that it does normaly, Then we use ajax to send the message. If there's any error we display the error(s), If some required fields are not filled, we we display a message to the user, telling him/her that those fields need to be filled, otherwise just let the user know that his / her message was successfully sent and that's it!

<div class="contact_form">
    <h2>How can we help?</h2>
    <div id="show-message"></div>
    {exp:email:contact_form user_recipients="no" recipients="youremail@website.com" charset="utf-8" form_class="custom"}
    <div class="row">
        <label for="email_address">Email Address</label>
        <input type="email" id="email_address" name="from" required="required" />
    </div>
    <div class="row">
        <label for="full_name">Full Name</label>
        <input type="text" id="full_name" name="name" required="required">
    </div>
    <div class="row">
        <label for="message">Your Message</label>
        <textarea class="message" id="message" name="message" required="required"></textarea>
    </div>

    <div class="row">
        <div class="right">
            <input name="submit" type='submit' value='Contact Us' class="button small" />
        </div>
    </div>
    {/exp:email:contact_form}
</div>


The code above will create a complete html form with opening and closing form tags plus all the necessary stuff that a normal web form needs, read more about ExpressionEngine's contact form

##**The jQuery Code**#

$(document).ready(function() {
    // we need this method to help us notify user 
    function showNotificationMessage(message) {
        $("#show-message").html(message);
        $("#show-message").fadeIn(1000);
    }
    $("#contact_form").submit(function(event) {
        event.preventDefault();
        $("#show-message").hide();
        $.ajax({
            url: "/",
            type: "post",
            dataType: "html",
            data: $(this).serialize(),
            error: function(jqXHR, textStatus, errorThrown) {
                showNotificationMessage("Sorry, there was an error");
            },
            success: function(html, textStatus, jqXHR) {
                if (html.match(/<title>Error<\/title>/)) {
                    var error = $(html).find('ul li:first').text();
                    if (error == "A valid email is required") {
                        showNotificationMessage("Please enter email address.");
                    } else if (error == "Email Message is Required") {
                        showNotificationMessage("Please enter a message.");
                    }
                } else {
                    showNotificationMessage("Thanks for contacting us, we'll get back to you soon!");
                    $('#contact_form').hide();
                    // we nofify the user and hide the form if we were successfull
                }
            }
        });
    });
});


As you can see, verything is clear, first we create a  helper method to help us display notification messages to the user, then when the form is submited, we prevent the default action and use jQuery's ajax method to serialize the submitted data and act on the response we get from it. If there's an error we use our helper method to display it, if everything went as planned, we just hide the form and notify the user that he/she was able to send us a message.


There's lots of other stuff you could do like showing a preloader when the data is being submitted but that's not something i wanted to show here, however its not very difficult to implement.


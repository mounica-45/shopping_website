<script setup>
 import { reactive } from 'vue';
 const userDetails=reactive({
    Uname: '',
    email:'',
    password:'',
    confirmpassword:'',

 })
 const handleSubmit=()=>{
    console.log(userDetails),"form submitted";
    // Clear the form manually
    userDetails.Uname = ''
    userDetails.email = ''
    userDetails.password = ''
    userDetails.confirmpassword = ''
 }
</script>

<template>
    <div class="modal">
      <div class="modal_content">
        <button class="modal_close_icon" @click="$emit('close')">×</button>
            <h2 class="modal_heading">Sign Up</h2>
            <form @submit.prevent="handleSubmit" class="modal_form">
                <div class="modal_form_group">
                    <label class="modal_form_group_label">Username:</label>
                    <input class="modal_form_group_input" type="text" placeholder="Enter username" v-model="userDetails.Uname" required />
                </div>
                <div class="modal_form_group">
                    <label class="modal_form_group_label">Email:</label>
                    <input class="modal_form_group_input" type="email" placeholder="Enter email" v-model="userDetails.email" required />
                </div>
                <div class="modal_form_group">
                    <label class="modal_form_group_label">Password:</label>
                    <input class="modal_form_group_input" type="password" placeholder="Enter password" v-model="userDetails.password" required />
                </div>
                <div class="modal_form_group">
                    <label class="modal_form_group_label">Confirm Password:</label>
                    <input class="modal_form_group_input" type="password" placeholder="Confirm password" v-model="userDetails.confirmpassword" required />
                </div>
                <div class="modal_form-actions">
                    <button type="submit" class="modal_submit_btn">Submit</button>&emsp;
                    <button type="button" class="modal_close_btn" @click="$emit('close')">Close</button>
                </div>
            </form>

        </div>
    </div>
</template>
  
 
  
  
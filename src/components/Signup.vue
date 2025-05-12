<script setup>
import { reactive, ref } from 'vue';

const userDetails = reactive({
  Uname: '',
  email: '',
  password: '',
  confirmpassword: '',
});

const errors = reactive({
  Uname: '',
  email: '',
  password: '',
  confirmpassword: '',
});

const validateForm = () => {
  let isValid = true;

  // Clear previous errors
  Object.keys(errors).forEach((key) => (errors[key] = ''));

  // Username
  if (!userDetails.Uname.trim()) {
    errors.Uname = 'Username is required';
    isValid = false;
  }

  // Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!userDetails.email.trim()) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!emailPattern.test(userDetails.email)) {
    errors.email = 'Invalid email format';
    isValid = false;
  }

  // Password
  if (!userDetails.password) {
    errors.password = 'Password is required';
    isValid = false;
  } else if (userDetails.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
    isValid = false;
  }

  // Confirm password
  if (userDetails.confirmpassword !== userDetails.password) {
    errors.confirmpassword = 'Passwords do not match';
    isValid = false;
  }

  return isValid;
};

const handleSubmit = () => {
  if (validateForm()) {
    console.log('Form submitted:', userDetails);
    

    // Clear the form
    Object.keys(userDetails).forEach((key) => (userDetails[key] = ''));
  }
};
</script>


<template>
    <div class="modal">
      <div class="modal_content">
        <button class="modal_close_icon" @click="$emit('close')">×</button>
        <h2 class="modal_heading">Sign Up</h2>
        <form @submit.prevent="handleSubmit" class="modal_form">
          <div class="modal_form_group">
            <label class="modal_form_group_label">Username:</label>
            <input class="modal_form_group_input" type="text" placeholder="Enter username" v-model="userDetails.Uname" />
            <small class="error_text" v-if="errors.Uname">{{ errors.Uname }}</small>
          </div>
  
          <div class="modal_form_group">
            <label class="modal_form_group_label">Email:</label>
            <input class="modal_form_group_input" type="email" placeholder="Enter email" v-model="userDetails.email" />
            <small class="error_text" v-if="errors.email">{{ errors.email }}</small>
          </div>
  
          <div class="modal_form_group">
            <label class="modal_form_group_label">Password:</label>
            <input class="modal_form_group_input" type="password" placeholder="Enter password" v-model="userDetails.password" />
            <small class="error_text" v-if="errors.password">{{ errors.password }}</small>
          </div>
  
          <div class="modal_form_group">
            <label class="modal_form_group_label">Confirm Password:</label>
            <input class="modal_form_group_input" type="password" placeholder="Confirm password" v-model="userDetails.confirmpassword" />
            <small class="error_text" v-if="errors.confirmpassword">{{ errors.confirmpassword }}</small>
          </div>
  
          <div class="modal_form-actions">
            <button type="submit" class="modal_submit_btn">Submit</button>&emsp;
            <button type="button" class="modal_close_btn" @click="$emit('close')">Close</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  
 
  
  
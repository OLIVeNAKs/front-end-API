<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="first_name">First Name</label>
          <input
            type="text"
            class="form-control"
            id="first_name"
            required
            v-model="student.first_name"
            name="first_name"
          />
        </div>
        <br />
  
        <div class="form-group">
          <label for="last_name">Last Name</label>
          <input
            class="form-control"
            id="last_name"
            required
            v-model="student.last_name"
            name="last_name"
          />
        </div>
        <br />

        <div class="form-group">
          <label for="last_name">Gender</label>
          <input
            class="form-control"
            id="gender"
            required
            v-model="student.gender"
            name="gender"
          />
        </div>
        <br />

        <div class="form-group">
          <label for="last_name">Class</label>
          <input
            class="form-control"
            id="class"
            required
            v-model="student.class"
            name="class"
          />
        </div>
        <br />

        <div class="form-group">
          <label for="physical_address">Physical Address</label>
          <input
            class="form-control"
            id="physical_address"
            v-model="student.physical_address"
            name="physical_address"
          />
        </div>
        <br />
  
        <button @click="saveStudent" class="btn btn-success">Submit</button>
      </div>
  
      <div v-else>
        <h4>Student saved successfully!</h4>
        <!-- <button class="btn btn-success" @click="newStudent">Add</button> -->
      </div>
    </div>
  </template>
  
  <script>
  import StudentDataService from "../services/StudentDataService";
  
  export default {
    name: "add-student",
    data() {
      return {
        student: {
          id: null,
          first_name: "",
          last_name: "",
          class: "",
          gender: "",
          physical_address: "",
          status: false
        },
        submitted: false
      };
    },
    methods: {
      saveStudent() {
        var data = {
          first_name: this.student.first_name,
          last_name: this.student.last_name,
          gender: this.student.gender,
          class: this.student.class,
          physical_address: this.student.physical_address,
          status: true,
        };
  
        StudentDataService.create(data)
          .then(response => {
            this.student.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
            // go to home page
            this.$router.push({ name: "students" });

          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newStudent() {
        this.submitted = false;
        this.student = {};
      }
    }
  };
  </script>
  
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>
<template>
    <div v-if="currentStudent" class="edit-form">
      <h4>Students Details</h4>
      <form>
        <div class="form-group">
          <label for="first_name">First Name</label>
          <input type="text" class="form-control" id="first_name"
            v-model="currentStudent.first_name"
          />
        </div>
        <br />

        <div class="form-group">
          <label for="last_name">Last Name</label>
          <input type="text" class="form-control" id="last_name"
            v-model="currentStudent.last_name"
          />
        </div>
        <br />

        <div class="form-group">
          <label for="gender">Gender</label>
          <input type="text" class="form-control" id="gender"
            v-model="currentStudent.gender"
          />
        </div>
        <br />

        <div class="form-group">
          <label for="class">Class</label>
          <input type="text" class="form-control" id="class"
            v-model="currentStudent.class"
          />
        </div>
        <br />

        <div class="form-group">
          <label for="physical_address">Physical Address</label>
          <input type="text" class="form-control" id="physical_address"
            v-model="currentStudent.physical_address"
          />
        </div>
        <br />
  
        <!-- <div class="form-group">
          <label><strong>Status:</strong></label>
          {{ currentStudent.status ? "At School" : "Left School" }}
        </div> -->
      </form>
  
      <!-- <button class="btn btn-sm btn-success"
        v-if="currentStudent.status"
        @click="updateStatus(false)"
      >
        Left
      </button> -->
      <!-- <button v-else class="btn btn-sm btn-danger"
        @click="updateStatus(true)"
      >
        At School
      </button> -->
  
    
      &nbsp;&nbsp;
  
      <button type="submit" class="btn btn-sm btn-success"
        @click="updateStudent"
      >
        Update
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Please click on a  ...</p>
    </div>
  </template>
  
  <script>
  import StudentDataService from "../services/StudentDataService";
  
  export default {
    name: "view-student",
    data() {
      return {
        currentStudent: null,
        message: ''
      };
    },
    methods: {
      getStudent(id) {
        StudentDataService.get(id)
          .then(response => {
            this.currentStudent = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
    //   updateStatus(status) {
    //     var data = {
    //       id: this.currentStudent.id,
    //     //   title: this.currentStudent.title,
    //     //   description: this.currentStudent.description,
    //       published: status
    //     };
  
    //     StudentDataService.update(this.currentStudent.id, data)
    //       .then(response => {
    //         this.currentStudent.status = status;
    //         console.log(response.data);
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    //   },
  
      updateStudent() {
        StudentDataService.update(this.currentStudent.id, this.currentStudent)
          .then(response => {
            console.log(response.data);
            this.message = 'The student was updated successfully!';
            // go to home page
            this.$router.push({ name: "students" });
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      deleteStudent() {
        StudentDataService.delete(this.currentStudent.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "students" });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.message = '';
      this.getStudent(this.$route.params.id);
    }
  };
  </script>
  
  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>
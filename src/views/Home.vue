<template>
  <div class="container">
    <b-card id="warning">
      <h1>Orders</h1>
      <div class="row">
        <b-label class="col-3">EmployeesImage: </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="EI"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">EmployeesNumber: </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="EN"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">EmployeesFn : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="EF"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">EmployeesLn : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="EL"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">OrderDate : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="OD"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">OrderPromotion : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="OP"></b-input>
      </div>
      <br />
      <b-button variant="danger" @click="addData()">Assent</b-button>
    </b-card>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { db } from "@/main.js";
export default {
  data() {
    return {
      EmployeesImage: "",
      EmployeesNumber: "",
      EmployeesFn: "",
      EmployeesLn: "",
      OrderDate: "",
      OrderPromotion: "",
    };
  },
  methods: {
    addData() {
      alert("compelet");
      const data = {
        EmployeesImage: this.EI,
        EmployeesNumber: this.EN,
        EmployeesFn: this.EF,
        EmployeesLn: this.EL,
        OrderPromotion: this.OP,
      };
      db.collection("MyForm")
        .doc("User")
        .set(data)
        .then(function () {
          console.log("Ducument successfully written! -> MyFrom");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });

      const dataText = {
        EmployeesImage: this.EI,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      db.collection("MyText")
        .doc()
        .set(dataText)
        .then(function () {
          console.log("Ducument successfully written! -> MyText");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>

<style scoped>
</style>

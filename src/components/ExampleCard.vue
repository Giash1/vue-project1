<template>
    <div>
        <div v-for="garment in garments" :key="garment.id" class="garment">
          <img v-bind:src="garment.img" alt="" class="img" />
        </div>
        <div v-for="grossary in grossaries" :key="grossary.id" class="garment">
          <img v-bind:src="grossary.img" alt="" class="img" />
        </div>

        <div class="text-info">
              <h3>{{ item.title }}</h3>
              <p>{{ item.details }}</p>
            </div>

          <div class="quantities">

            <select class="quantity" name="quantity" v-model="item.amount" required>

              <option v-for="number in numbers" :key="number" :value="number">
                {{ number }}
              </option>
            </select>
            <span class="price-info">{{ item.price }}/item</span>
          </div>

          <p class="price">SEK {{ total }}</p>

          <div class="remove-item">
            <button @click="removeItems">Remove</button>
          </div>
    </div>
      </template>

      <script>
      export default {
          name:"ExampleCard",

        data() {
          return {
            numbers: 20,
            item: [this.garment,this.grossary],
            garments: [],
            grossaries: [],
          };
        },
        mounted() {
          fetch("http://localhost:3000/grossaries")
            .then((res) => res.json())
            .then((data) => (this.grossaries = data))
            .catch((err) => console.log(err.message));

          fetch("http://localhost:3000/garments")
            .then((res) => res.json())
            .then((data) => (this.garments = data))
            .catch((err) => console.log(err.message));

        },




        computed: {
          total() {
            return this.item.price * this.item.amount;
          },
        },

         methods: {
           removeItems() {
            this.$store.dispatch("this.garments, this.grossaries");
           },
        },
       };
      </script>

      <style lang="scss" scoped>

      </style>

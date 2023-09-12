<template>
  <div class="p-4">
    <h1>mikaleb [at] protonmail.com</h1>
    <!-- <form @submit.prevent="onSubmit" class="form">
      <input type="text" v-model="name" placeholder="Your name" />
      <input type="email" v-model="email" placeholder="Your email" />
      <textarea type="textarea" v-model="message" placeholder="Your message" />

      <button type="submit">Send</button>
    </form> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const FORMSPARK_ACTION_URL = 'https://submit-form.com/grLHdF2r'

const submit = async () => {
  const msg = {
    name: name.value,
    email: email.value,
    message: message.value
  }

  // fetch post
  await fetch(FORMSPARK_ACTION_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(msg)
  })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.error(error)
    })
}

async function sendEmail() {
  await submit()
  message.value = ''
}

const onSubmit = async () => {
  // Send the email
  await sendEmail()
}
</script>

<style scoped lang="scss">
.form {
  @apply flex flex-col items-center justify-center;
  input {
    @apply border border-gray-300 rounded-md p-2 m-2;
  }
  button {
    @apply border border-gray-300 rounded-md p-2 m-2 dark:bg-slate-800 bg-blue-500 text-white px-4 py-2 font-medium;
  }
  textarea {
    @apply border border-gray-300 rounded-md p-2 m-2;
  }
}
</style>

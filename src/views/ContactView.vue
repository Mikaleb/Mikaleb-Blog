<template>
  <div class="p-4">
    <h1>Contact Us</h1>
    <form @submit.prevent="onSubmit" class="form">
      <input type="text" v-model="name" placeholder="Your name" />
      <input type="email" v-model="email" placeholder="Your email" />
      <textarea type="textarea" v-model="message" placeholder="Your message" />
      <vue-turnstile :site-key="turnstile.sitekey" v-model="token" />

      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VueTurnstile from 'vue-turnstile'
import type { MailDataRequired } from '@sendgrid/helpers/classes/mail'
import type { EmailData } from '@sendgrid/helpers/classes/email-address'

// import client from '@sendgrid/client'
import sgMail from '@sendgrid/mail'

const name = ref('')
const email = ref('')
const message = ref('')

const turnstile = {
  sitekey: '0x4AAAAAAAJpavwjlIEFSopf',
  secretKey: '0x4AAAAAAAJpag18dn_8pz2iOOEvK5Dk9Vw'
}

const token = ref('')

async function sendEmail() {
  const apiKey = import.meta.env.VITE_SENDGRID_API_KEY

  sgMail.setApiKey(apiKey)

  const fromData: EmailData = {
    name: name.value,
    email: email.value
  }

  const msg: MailDataRequired = {
    to: 'mikaleb@live.fr', // Change to your recipient
    from: fromData, // Change to your verified sender
    subject: 'Contact Mikaleb',
    text: message.value as unknown as string,
    html: message.value as unknown as string
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
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

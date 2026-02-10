<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive<Record<string, string>>({})
const isSubmitting = ref(false)
const submitSuccess = ref(false)

const isValidEmail = computed(() => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
})

function validate(): boolean {
  Object.keys(errors).forEach(key => delete errors[key])

  if (!form.name.trim()) {
    errors.name = 'Name is required'
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!isValidEmail.value) {
    errors.email = 'Please enter a valid email address'
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  return Object.keys(errors).length === 0
}

async function handleSubmit() {
  if (!validate()) return

  isSubmitting.value = true

  await new Promise(resolve => setTimeout(resolve, 1500))

  isSubmitting.value = false
  submitSuccess.value = true

  form.name = ''
  form.email = ''
  form.message = ''

  setTimeout(() => {
    submitSuccess.value = false
  }, 5000)
}
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="space-y-6"
    novalidate
  >
    <!-- Success Message -->
    <Transition name="slide-fade">
      <div
        v-if="submitSuccess"
        class="p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
        role="alert"
      >
        <p class="text-green-400 font-medium">
          Thank you! Your message has been sent successfully.
        </p>
      </div>
    </Transition>

    <!-- Name Field -->
    <div>
      <label for="name" class="block text-sm font-medium text-[#F0EDE8] mb-2">
        Name <span class="text-red-400" aria-hidden="true">*</span>
      </label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        autocomplete="name"
        class="w-full px-4 py-3 rounded-lg border bg-[#161916]/50 text-[#F0EDE8] placeholder-[#9A9990] transition-all duration-300 focus:ring-0 focus:outline-none focus:scale-[1.01]"
        :class="errors.name
          ? 'border-red-500 focus:border-red-500'
          : 'border-white/10 focus:border-[#A78BFA] focus:glow-subtle-purple'"
        :aria-invalid="!!errors.name"
        :aria-describedby="errors.name ? 'name-error' : undefined"
        placeholder="Your name"
      />
      <Transition name="slide-fade">
        <p
          v-if="errors.name"
          id="name-error"
          class="mt-2 text-sm text-red-400"
          role="alert"
        >
          {{ errors.name }}
        </p>
      </Transition>
    </div>

    <!-- Email Field -->
    <div>
      <label for="email" class="block text-sm font-medium text-[#F0EDE8] mb-2">
        Email <span class="text-red-400" aria-hidden="true">*</span>
      </label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        autocomplete="email"
        inputmode="email"
        class="w-full px-4 py-3 rounded-lg border bg-[#161916]/50 text-[#F0EDE8] placeholder-[#9A9990] transition-all duration-300 focus:ring-0 focus:outline-none focus:scale-[1.01]"
        :class="errors.email
          ? 'border-red-500 focus:border-red-500'
          : 'border-white/10 focus:border-[#A78BFA] focus:glow-subtle-purple'"
        :aria-invalid="!!errors.email"
        :aria-describedby="errors.email ? 'email-error' : undefined"
        placeholder="your@email.com"
      />
      <Transition name="slide-fade">
        <p
          v-if="errors.email"
          id="email-error"
          class="mt-2 text-sm text-red-400"
          role="alert"
        >
          {{ errors.email }}
        </p>
      </Transition>
    </div>

    <!-- Message Field -->
    <div>
      <label for="message" class="block text-sm font-medium text-[#F0EDE8] mb-2">
        Message <span class="text-red-400" aria-hidden="true">*</span>
      </label>
      <textarea
        id="message"
        v-model="form.message"
        rows="5"
        class="w-full px-4 py-3 rounded-lg border bg-[#161916]/50 text-[#F0EDE8] placeholder-[#9A9990] transition-all duration-300 focus:ring-0 focus:outline-none focus:scale-[1.01] resize-y min-h-32"
        :class="errors.message
          ? 'border-red-500 focus:border-red-500'
          : 'border-white/10 focus:border-[#A78BFA] focus:glow-subtle-purple'"
        :aria-invalid="!!errors.message"
        :aria-describedby="errors.message ? 'message-error' : undefined"
        placeholder="Tell me about your project..."
      />
      <Transition name="slide-fade">
        <p
          v-if="errors.message"
          id="message-error"
          class="mt-2 text-sm text-red-400"
          role="alert"
        >
          {{ errors.message }}
        </p>
      </Transition>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      :disabled="isSubmitting"
      data-magnetic
      class="w-full py-4 px-6 bg-[#8B5CF6] hover:bg-[#A78BFA] disabled:bg-[#8B5CF6]/50 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 touch-manipulation glow-subtle-purple hover:glow-purple"
    >
      <svg
        v-if="isSubmitting"
        class="animate-spin w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      {{ isSubmitting ? 'Sending...' : 'Send Message' }}
    </button>
  </form>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 300ms ease-out;
}

.slide-fade-leave-active {
  transition: all 200ms ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>

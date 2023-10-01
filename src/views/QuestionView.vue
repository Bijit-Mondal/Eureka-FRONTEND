<template>
  <Suspense>
      <div class="question">
        <QuestionComponent/>
      </div>
    <template #fallback>
      <div class="question">
        <QuestionSkeleton/>
      </div>
    </template>
  </Suspense>
</template>
<script setup>
import QuestionComponent from '@/components/Question/QuestionComponent.vue'
import QuestionSkeleton from '@/components/Question/QuestionSkeleton.vue';
</script>

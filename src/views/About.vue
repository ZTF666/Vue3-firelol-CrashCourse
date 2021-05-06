<template>
 
     <div class="card card-body mt-4">
       <h3>Edit Users</h3>
    <form @submit.prevent="update">
        <div class="form-group">
          <label for="name">name</label>
          <input v-model="form.name" class="form-control" required />
        </div>

        <div class="form-group mt-3">
          <label for="email">email</label>
          <input v-model="form.email" class="form-control" type="email" required />
        </div>

        <button type="submit" class="btn btn-success mt-3"> Update User</button>
    </form>
  </div>
 
</template>
<script>
import { reactive,onMounted, computed } from 'vue'
import { useRoute,useRouter} from 'vue-router'
import {getUser,updateUser} from '../firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const userId = computed(()=> route.params.id)

    const form = reactive({name:'',email:''})
    onMounted(async()=>{
      const user =await getUser(userId.value)
      form.name=user.name
      form.email=user.email
    })

    const update= async ()=>{
      await updateUser(userId.value, { ...form})
      form.name=''
      form.email=''
      router.push('/')
                 }
      return {form,update}
    
    
  }
}

</script>


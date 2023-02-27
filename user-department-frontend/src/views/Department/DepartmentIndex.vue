<script setup>
    import useDepartments from '../../composables/departments';
    import { onMounted } from 'vue';
    import DepartmentEdit from './DepartmentEdit.vue';

    const {departments, getDepartments, destroyDepartment } = useDepartments();
    onMounted(() => getDepartments());
</script>

<template>
    <div class="mt-12">
      <div class="flex justify-end m-2 p-2">
        <RouterLink :to="{name: 'CreateDepartments'}" class="px-4 py-2 bg-indigo-500 text-white rounded">New Department</RouterLink>
      </div>  
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            
                        </th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="department in departments" :key="department.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        
                        <td class="px-6 py-4">
                            {{department.name}}
                        </td>
                        <td class="px-6 py-4 space-x-2">
                            <RouterLink :to="{name: 'DepartmentEdit', params: {id: department.id} }" class="px-4 py-2 bg-green-500 text-white rounded">Edit</RouterLink>
                            <button @click="destroyDepartment(skill.id)" class="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
                        </td>
                    </tr>
                
                </tbody>
            </table>
        </div>

    </div>
</template>
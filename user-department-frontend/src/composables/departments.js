import { ref } from "vue";
import axios from 'axios'
import { useRouter } from "vue-router";

axios.defaults.baseURL = "127.0.0.1:8000/api/";
 
export default function useDepartments(){
    const departments = ref([]);
    const department = ref([]);
    const errors = ref([]);
    const router = useRouter();

    const getDepartments = async () => {
        const response = await axios.get("departments");
        departments.value = response.data.data;
    };

    const getDepartment = async (id) => {
        const response = await axios.get("departments/" + id);
        department.value = response.data.data;
    }

    const storeDepartment = async (data) => {
        try{
            await axios.post("departments", data);
            await router.push({name: "DepartmentIndex"});
        }catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.error;
            }
        }
    }

    const updateDepartment = async (id) => {
        try{
            await axios.put("departments/" + id, department.value);
            await router.push({ name:"DepartmentIndex" })
        }catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.error;
            }
        }
    }

    const destroyDepartment = async (id) => {
        if(!window.confirm("Are you sure?")){
            return;
        }
        await axios.delete("departments/" + id);
        await getDepartments();
    }

    return{
        department,
        departments,
        getDepartment,
        getDepartments,
        storeDepartment,
        updateDepartment,
        destroyDepartment,
        errors,
    };
}
<template>
       <div :key="task.id" v-for="task in tasks">
             <!-- 3- using component -->
            <TaskItem @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :task="task" />
       </div>
</template>

<script>
//1- import component
import TaskItem from './Task'
export default {
    name: 'TasksComponent',
    props:{
        tasks: Array
    },

    //2- register component
    components:{
        TaskItem
    },
    //emits:['delete-task', 'toggle-reminder'],

}
</script>

// 1- import component
// 2- register component
// 3- use component
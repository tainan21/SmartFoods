<template>
  <div id="app" class="container">
    <div class="align-items-center flex-column w-100 " style="display: flex">
      <div @click="show_task" class="justify-content-around w-100" style="display: flex">
        <div v-for="column in columns" :key="column.title" class="">
          <div class="justify-content-between" style="display: flex">
            <p class="" style="color: black">{{ column.title }}</p>
            <div>
              <i class="fas fa-plus" style="color: #5dbfd4; cursor: pointer">
                <i class="fas fa-ellipsis-v mr-2 ml-4" style="color: black; cursor: pointer"></i>
              </i>
            </div>
          </div>
          <!-- Draggable component comes from vuedraggable. It provides drag & drop functionality -->
          <draggable :list="column.tasks" :animation="200" ghost-class="ghost-card" group="tasks" class="">
            <!-- Each element from here will be draggable and animated. Note :key is very important here to be unique both for draggable and animations to be smooth & consistent. -->
            <task-card v-for="task in column.tasks" :key="task.id" :task="task" class="mt-3 cursor-move " ></task-card>
            <!-- </transition-group> -->
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TaskCard from "@/components/kanban/TaskCard.vue";
export default {
  name: "App",
  components: {
    TaskCard,
    draggable,
  },
  data() {
    return {
      columns: [
        {
          title: "A fazer",
          tasks: [
            {
              id: 1,
              title: "X-tudo",
              date: "Tainan Camargo",
              type: "23 minutos",
            },
            {
              id: 3,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design",
            },
          
          ],
        },
        {
          title: "Fazendo",
          tasks: [
            {
              sub_tasks: [
                {
                  id: 8,
                  title: "Add discount code to checkout page",
                  date: "Sep 14",
                },
              ],
              id: 8,
              title: "Provide documentation on integrations",
              date: "Sep 12",
              type: "Backend",
            },
          ],
        },
        {
          title: "Feito/Entregar",
          tasks: [
            {
              id: 9,
              title: "Provide documentation on integrations",
              date: "Sep 12",
            },
            {
              id: 10,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design",
            },
          ],
        },
        {
          title: "Entregando",
          tasks: [
            {
              id: 14,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
            },
          ],
        },
      ],
    };
  },
  methods: {
    show_task() {
      console.log(this.columns);
    },
  },
};
</script>

<style scoped>
.column-width {
  min-width: 320px;
  width: 320px;
}
/* Unfortunately @apply cannot be setup in codesandbox, 
but you'd use "@apply border opacity-50 border-blue-500 bg-gray-200" here */
.ghost-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
</style>

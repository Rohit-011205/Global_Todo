import { create } from 'zustand';
import { axiosInstance } from '../../API.js';

const useTaskStore = create((set) => ({

    tasks: [],
    loading: false,
    error: null,

    fetchTasks: async () => {
        try {
            set({ loading: true, error: null });
            const response = await axiosInstance.get('/tasks');
            set({ tasks: response.data, loading: false });
        } catch (error) {
            console.log(error);
            set({ error: 'Failed to fetch tasks', loading: false });
        }
    },

    addTask: async (task) => {
        try {
            set({ loading: true, error: null });
            const response = await axiosInstance.post('/tasks', task);
            set((state) => ({
                tasks: [...state.tasks, response.data]
            }))
            set({ loading: false });
        } catch (error) {
            console.log(error);
            set({ error: 'Failed to add task', loading: false });
        }
    },

    completeTask: async (id) => {
        try {
            // set({ loading: true, error: null });
            const response = await axiosInstance.patch(`/tasks/${id}`);

            set((state) => ({
                tasks: state.tasks.map((t) => t.id === id ? response.data : t),
                loading: false
            }))

            console.log("action done")
        } catch (error) {
            console.log(error);
            set({ error: 'Failed to complete task', loading: false });
        }
    },

    removeTask: async (id) => {
        try {
            // set({ loading: true, error: null });
            await axiosInstance.delete(`/tasks/${id}`);
            set((state) => ({
                tasks: state.tasks.filter((t) => t.id !== id),
                loading: false
            }))
        } catch (error) {
            console.log(error);
            set({ error: 'Failed to delete task', loading: false });
        }
    },
}))

export default useTaskStore;
class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentFilter = 'semua';
        this.storageKey = 'tasks_data';
        
        this.elements = {
            taskInput: document.getElementById('taskInput'),
            addBtn: document.getElementById('addBtn'),
            taskList: document.getElementById('taskList'),
            filterBtns: document.querySelectorAll('.filter-btn'),
            clearBtn: document.getElementById('clearBtn'),
            countAll: document.getElementById('countAll'),
            countActive: document.getElementById('countActive'),
            countDone: document.getElementById('countDone'),
        };
        
        this.init();
    }

    init() {
        this.loadFromStorage();
        this.attachEventListeners();
        this.render();
    }

    attachEventListeners() {
        // Add task button
        this.elements.addBtn.addEventListener('click', () => this.addTask());
        
        // Input enter key
        this.elements.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTask();
            }
        });

        // Filter buttons
        this.elements.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setFilter(e.target.closest('.filter-btn').dataset.filter);
            });
        });

        // Clear completed tasks
        this.elements.clearBtn.addEventListener('click', () => this.clearCompleted());
    }

    addTask() {
        const text = this.elements.taskInput.value.trim();
        
        if (!text) {
            this.showNotification('Silakan masukkan tugas!');
            return;
        }

        if (text.length > 500) {
            this.showNotification('Tugas terlalu panjang (maksimal 500 karakter)');
            return;
        }

        const task = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleString('id-ID')
        };

        this.tasks.unshift(task);
        this.saveToStorage();
        this.elements.taskInput.value = '';
        this.elements.taskInput.focus();
        this.render();
        this.showNotification('✅ Tugas berhasil ditambahkan!');
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveToStorage();
        this.render();
        this.showNotification('❌ Tugas dihapus');
    }

    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveToStorage();
            this.render();
        }
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update active button
        this.elements.filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === filter) {
                btn.classList.add('active');
            }
        });

        this.render();
    }

    clearCompleted() {
        const completed = this.tasks.filter(t => t.completed).length;
        if (completed === 0) {
            this.showNotification('Tidak ada tugas yang selesai');
            return;
        }

        if (confirm(`Hapus ${completed} tugas yang sudah selesai?`)) {
            this.tasks = this.tasks.filter(t => !t.completed);
            this.saveToStorage();
            this.render();
            this.showNotification(`🗑️ ${completed} tugas dihapus`);
        }
    }

    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'aktif':
                return this.tasks.filter(t => !t.completed);
            case 'selesai':
                return this.tasks.filter(t => t.completed);
            default:
                return this.tasks;
        }
    }

    updateCounts() {
        const total = this.tasks.length;
        const active = this.tasks.filter(t => !t.completed).length;
        const done = this.tasks.filter(t => t.completed).length;

        this.elements.countAll.textContent = total;
        this.elements.countActive.textContent = active;
        this.elements.countDone.textContent = done;

        // Show/hide clear button
        this.elements.clearBtn.style.display = done > 0 ? 'block' : 'none';
    }

    render() {
        const filteredTasks = this.getFilteredTasks();
        this.updateCounts();

        if (filteredTasks.length === 0) {
            this.elements.taskList.innerHTML = `
                <li class="empty-state">
                    <span class="empty-icon">
                        ${this.currentFilter === 'aktif' ? '✨' : this.currentFilter === 'selesai' ? '🎉' : '🎯'}
                    </span>
                    <p>
                        ${this.currentFilter === 'aktif' 
                            ? 'Tidak ada tugas aktif. Bagus sekali!' 
                            : this.currentFilter === 'selesai'
                            ? 'Belum ada tugas yang selesai'
                            : 'Belum ada tugas. Mulai tambahkan tugas Anda!'}
                    </p>
                </li>
            `;
            return;
        }

        this.elements.taskList.innerHTML = filteredTasks.map(task => `
            <li class="task-item ${task.completed ? 'completed' : ''}">
                <input 
                    type="checkbox" 
                    class="task-checkbox" 
                    ${task.completed ? 'checked' : ''}
                    onchange="taskManager.toggleTask(${task.id})"
                >
                <span class="task-text">${this.escapeHtml(task.text)}</span>
                <button 
                    class="task-delete-btn"
                    onclick="taskManager.deleteTask(${task.id})"
                    title="Hapus tugas"
                >
                    🗑️ Hapus
                </button>
            </li>
        `).join('');
    }

    saveToStorage() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
        } catch (e) {
            console.error('Error saving to storage:', e);
        }
    }

    loadFromStorage() {
        try {
            const data = localStorage.getItem(this.storageKey);
            this.tasks = data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Error loading from storage:', e);
            this.tasks = [];
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #333;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 0.9rem;
            z-index: 9999;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
        `;
        notification.textContent = message;
        
        // Add animation
        const style = document.createElement('style');
        if (!document.querySelector('#notificationStyle')) {
            style.id = 'notificationStyle';
            style.textContent = `
                @keyframes slideInRight {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
}

// Initialize app when DOM is ready
let taskManager;
document.addEventListener('DOMContentLoaded', () => {
    taskManager = new TaskManager();
});

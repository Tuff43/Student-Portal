// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const studentId = document.getElementById('studentId').value;
            const password = document.getElementById('password').value;
            
            // Simple validation
            if (studentId && password) {
                // In a real application, this would be an API call
                // For demo purposes, we'll just redirect to the dashboard
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('studentName', 'John Doe');
                window.location.href = 'dashboard.html';
            } else {
                alert('Please enter your student ID and password');
            }
        });
    }

    // Logout Button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'index.html';
        });
    }

    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn && window.location.pathname !== '/index.html') {
        // Redirect to login page if not logged in
        // In a real application, this would be more sophisticated
        // window.location.href = 'index.html';
    }

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }

    // Current Date
    const currentDateElement = document.getElementById('currentDate');
    if (currentDateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        currentDateElement.textContent = today.toLocaleDateString('en-US', options);
    }

    // Course Details
    const viewMaterialsBtns = document.querySelectorAll('.course-btn');
    const courseDetails = document.getElementById('courseDetails');
    const closeDetails = document.getElementById('closeDetails');
    
    if (viewMaterialsBtns.length > 0 && courseDetails) {
        viewMaterialsBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                courseDetails.classList.add('active');
            });
        });
    }
    
    if (closeDetails) {
        closeDetails.addEventListener('click', function() {
            courseDetails.classList.remove('active');
        });
    }

    // Course Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabBtns.length > 0 && tabContents.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all tabs
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                this.classList.add('active');
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    // Assignment Submission
    const submitBtns = document.querySelectorAll('.submit-btn');
    const assignmentSubmission = document.getElementById('assignmentSubmission');
    const closeSubmission = document.getElementById('closeSubmission');
    
    if (submitBtns.length > 0 && assignmentSubmission) {
        submitBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                assignmentSubmission.classList.add('active');
            });
        });
    }
    
    if (closeSubmission) {
        closeSubmission.addEventListener('click', function() {
            assignmentSubmission.classList.remove('active');
        });
    }

    // File Upload
    const fileInputs = document.querySelectorAll('input[type="file"]');
    
    if (fileInputs.length > 0) {
        fileInputs.forEach(input => {
            input.addEventListener('change', function(e) {
                const fileList = this.files;
                const fileListContainer = this.closest('.form-group').querySelector('.file-list');
                
                if (fileListContainer) {
                    fileListContainer.innerHTML = '';
                    
                    for (let i = 0; i < fileList.length; i++) {
                        const file = fileList[i];
                        const fileSize = (file.size / 1024).toFixed(2) + ' KB';
                        
                        const fileItem = document.createElement('div');
                        fileItem.className = 'file-item';
                        fileItem.innerHTML = `
                            <span class="file-name">${file.name}</span>
                            <span class="file-size">${fileSize}</span>
                            <button class="file-remove">×</button>
                        `;
                        
                        fileListContainer.appendChild(fileItem);
                    }
                    
                    // Add event listeners to remove buttons
                    const removeButtons = fileListContainer.querySelectorAll('.file-remove');
                    removeButtons.forEach(btn => {
                        btn.addEventListener('click', function() {
                            this.closest('.file-item').remove();
                        });
                    });
                }
            });
        });
    }

    // New Message
    const newMessageBtn = document.getElementById('newMessageBtn');
    const newMessageModal = document.getElementById('newMessageModal');
    const closeModal = document.getElementById('closeModal');
    const cancelMessage = document.getElementById('cancelMessage');
    
    if (newMessageBtn && newMessageModal) {
        newMessageBtn.addEventListener('click', function() {
            newMessageModal.classList.add('active');
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            newMessageModal.classList.remove('active');
        });
    }
    
    if (cancelMessage) {
        cancelMessage.addEventListener('click', function() {
            newMessageModal.classList.remove('active');
        });
    }

    // Profile Tabs
    const profileNavItems = document.querySelectorAll('.profile-nav li');
    const profileTabs = document.querySelectorAll('.profile-tab');
    
    if (profileNavItems.length > 0 && profileTabs.length > 0) {
        profileNavItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all items
                profileNavItems.forEach(i => i.classList.remove('active'));
                profileTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked item and corresponding tab
                this.classList.add('active');
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    // Resource Categories
    const categoryItems = document.querySelectorAll('.category-item');
    const resourceCards = document.querySelectorAll('.resource-card');
    
    if (categoryItems.length > 0 && resourceCards.length > 0) {
        categoryItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all items
                categoryItems.forEach(i => i.classList.remove('active'));
                
                // Add active class to clicked item
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                // Show/hide resource cards based on category
                if (category === 'all') {
                    resourceCards.forEach(card => card.style.display = 'flex');
                } else {
                    resourceCards.forEach(card => {
                        if (card.classList.contains(category)) {
                            card.style.display = 'flex';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    }

    // Message List
    const messageItems = document.querySelectorAll('.message-item');
    
    if (messageItems.length > 0) {
        messageItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all items
                messageItems.forEach(i => i.classList.remove('active'));
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // In a real application, this would load the message content
            });
        });
    }

    // Form Submissions
    const forms = document.querySelectorAll('form');
    
    if (forms.length > 0) {
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // In a real application, this would submit the form data to the server
                // For demo purposes, we'll just show an alert
                alert('Form submitted successfully!');
                
                // Close modals if they exist
                if (assignmentSubmission && assignmentSubmission.classList.contains('active')) {
                    assignmentSubmission.classList.remove('active');
                }
                
                if (newMessageModal && newMessageModal.classList.contains('active')) {
                    newMessageModal.classList.remove('active');
                }
                
                // Reset form
                this.reset();
            });
        });
    }

    // Notification Dropdown (simplified for demo)
    const notifications = document.querySelector('.notifications');
    
    if (notifications) {
        notifications.addEventListener('click', function() {
            alert('Notifications: \n1. New assignment posted in CSC301\n2. Your MTH202 quiz has been graded\n3. New announcement from Academic Office');
        });
    }

    // User Profile Dropdown (simplified for demo)
    const userProfile = document.querySelector('.user-profile');
    
    if (userProfile) {
        userProfile.addEventListener('click', function() {
            const studentName = localStorage.getItem('studentName') || 'Student';
            alert(`Logged in as: ${studentName}\nView Profile\nSettings\nLogout`);
        });
    }
});
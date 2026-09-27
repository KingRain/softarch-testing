pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out source repository...'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'python -m pip install --upgrade pip'
                bat 'pip install pytest selenium'
            }
        }

        stage('Pytest Unit Tests') {
            steps {
                bat 'python -m pytest test_wallet.py -v'
            }
        }

        stage('Selenium UI Automation') {
            steps {
                bat 'python test_selenium_login.py'
            }
        }
    }

    post {
        always {
            echo "Pipeline run completed."
        }
        success {
            echo "BUILD SUCCESS: All unit tests and Selenium UI automated flows passed! Safe to deploy."
        }
        failure {
            echo "BUILD FAILED: One or more automated tests failed."
        }
    }
}

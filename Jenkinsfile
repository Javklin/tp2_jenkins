pipeline {
    agent any
    stages {

        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                bat 'npm test'
            }
        }





    }
    
post {
    success {
        mail to: 'franklin.assogba12@gmail.com', subject: 'Build Succeeded', body: 'The build was a success.'
    }
    failure {
        mail to: 'franklin.assogba12@gmail.com', subject: 'Build Failed', body: 'The build failed.'
    }
}

}

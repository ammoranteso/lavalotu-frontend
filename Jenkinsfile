pipeline{
    agent any
    environment {
      // GOOGLE_PROJECT_ID='pec-covid'
      // GOOGLE_SERVICE_ACCOUNT=credentials('pec-google')
      DOCKER_CRENDENTIALS=credentials('docker')
      HOME = '.'
    }
    tools {
      git 'Default'
      nodejs 'Default'
    }
    stages{
        stage("Init"){
            steps{
               sh """
               npm install
               """
            }
        }
        // stage("Test") {
        //     steps {
        //       sh """
        //       npm run test
        //       """
        //     }
        // }
        stage("Build and Push") {
          when {
            anyOf { branch 'master'; branch 'develop' }
          }
          steps {
            sh(returnStdout: true, script: "docker login -u ${DOCKER_CRENDENTIALS_USR} -p ${DOCKER_CRENDENTIALS_PSW}")
            sh(returnStdout: true, script: 'npm run docker-push')
            sh(returnStdout: true, script: 'docker logout')
          }
        }
    }
}

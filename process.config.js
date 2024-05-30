
module.exports = {
    apps: {
        name: "reja",
        cwd: "./",
        script: "./server.js",
        watch: false,
        env_production: {
            NODE_ENV: "production",
        },
        instances: 2,
        exec_mode: "cluster"
    }
}
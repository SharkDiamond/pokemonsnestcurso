export const EnvConfiguration = ()=>({

    enviroment: process.env.NODE_ENV || 'env',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002,
    defaultlimit: process.env.DEFAULT_LIMIT || 7

})
/**
 * static initialization block
 * whenever we want to intiliaze static property based on some complex logic 
 * we can use static intialization block
 */

class dbconnection{
    env = "production"
    static connection;
    static prodConn(){
        return {
            'host':'xyz@abc.com',
            'port':5432,
            'username':'myhost',
            'password':'myhost@123'
        }
    }

    static nonprodConn(){
         return {
            'host':'xyz.ebiz@abc.com',
            'port':5432,
            'username':'myhost',
            'password':'myhost@123'
        }
    }

    static{
        if(env === "production"){
            this.connection = this.prodConn()
        }
        else{
            this.connection = this.nonprodConn()
        }
    }
}
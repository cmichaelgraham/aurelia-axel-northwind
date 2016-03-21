# aurelia-axel-northwind
As a user, I want a walk through of creating a web app from the `aurelia-axel` starter kit, based of a familiar database (Northwind).  

## Setup Your Environment

### SQL Server

1. Install SQL Server
2. Download Northwind Database Backup
3. Restore Northwind Database

![image](https://cloud.githubusercontent.com/assets/10272832/13908165/ec072648-eec2-11e5-928c-1d054a1d7810.png)

![image](https://cloud.githubusercontent.com/assets/10272832/13908145/7e3df006-eec2-11e5-8ee6-170256b2b686.png)

### Visual Studio

## Get Started With Data

### Copy aurelia-axel

![image](https://cloud.githubusercontent.com/assets/10272832/13908176/2f3e22c2-eec3-11e5-96e6-59d7d3c41d86.png)

1. Rename the folder: `aurelia-axel` :arrow_right: `aurelia-axel-northwind`
2. Rename the solution file :arrow_right: `aurelia-axel-northwind.sln`
3. Switch to the `aurelia-axel-northwind` folder
4. Rename the project file :arrow_right: `aurelia-axel-northwind.csproj`
5. Switch back to the main folder
6. Open the solution in Visual Studio (run as administrator)
7. Right click the old project (which didn't load) and remove it from the solution.
8. Right click the solution and `add - existing project` and browse to the renamed project file
9. The project should load

![image](https://cloud.githubusercontent.com/assets/10272832/13908359/98e30640-eec6-11e5-8d14-5c654cd39036.png)

### Create EF Model

1. Create new empty project

    ![image](https://cloud.githubusercontent.com/assets/10272832/13908387/2bb9a7e4-eec7-11e5-85e5-574d230bec79.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908450/2864cb72-eec8-11e5-94e9-c6ea5d08efa2.png)
    
2. Delete the (unhelpful) `Class1.cs`
3. Add Entity Framework Model

    ![image](https://cloud.githubusercontent.com/assets/10272832/13908503/51e6cd78-eec9-11e5-92a1-1beb9c624322.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908535/d95d2126-eec9-11e5-9175-a326f97e9e64.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908540/0551ee38-eeca-11e5-93ea-6e90df1e9987.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908545/487351ac-eeca-11e5-9109-9a0e0841753d.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908559/95f173dc-eeca-11e5-9881-6dad13987da8.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908570/ccafa0b0-eeca-11e5-9a31-c7a634d84452.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908577/ece56860-eeca-11e5-9ab4-ecc6fda0085a.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908597/79fa5bf2-eecb-11e5-9072-dc0639795b73.png)
    
4. Bask in the glory of your automatically created EF model !! :smile:

    ![image](https://cloud.githubusercontent.com/assets/10272832/13908626/3d35389e-eecc-11e5-9580-3cc942ae0176.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908628/565b1532-eecc-11e5-9eda-1cc6b3958c0c.png)

### Create OData Controller

1. Make sure you did a `rebuild` on the solution
2. Add a reference to the EF project

    ![image](https://cloud.githubusercontent.com/assets/10272832/13908688/a375c5e6-eecd-11e5-9977-991892a78a7b.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908700/e514e4aa-eecd-11e5-8130-1475838236a8.png)

3. Add the connection string from the EF project's `app.config` to the web project's `web.config`

    ![image](https://cloud.githubusercontent.com/assets/10272832/13908718/3d95c0b8-eece-11e5-984b-f2fbef351524.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908731/99c5e8ea-eece-11e5-8897-c9c790032122.png)

4. Add the OData controller

    ![image](https://cloud.githubusercontent.com/assets/10272832/13908754/3e23130e-eecf-11e5-863b-e660d93bf106.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908765/72ffc4b4-eecf-11e5-8fc8-a9adc9902a1a.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908774/9bab19fe-eecf-11e5-91f9-9fd3a578a44d.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908803/390ed000-eed0-11e5-8f79-40fdc6fbc0e1.png)

5. Copy the `using` statements to the `WebApiConfig.cs` file

    ![image](https://cloud.githubusercontent.com/assets/10272832/13908791/f6d7230e-eecf-11e5-8906-1066f6d7d37e.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908807/6fe7f818-eed0-11e5-92ee-cc6cfe7c722f.png)

6. Copy the OData code block to the `WebApiConfig.cs` file

    ![image](https://cloud.githubusercontent.com/assets/10272832/13908823/e03e4e46-eed0-11e5-8307-fc2095479103.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908830/2761f296-eed1-11e5-901e-7c13cb985eca.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908870/f7e645b6-eed1-11e5-961a-fb2ffd6070da.png)
    
7. Rebuild and run in the browser

### Play with OData URLs

### Create Search Route and Search View

### Create Search Criteria View

### Create Search Results View


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
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908626/3d35389e-eecc-11e5-9580-3cc942ae0176.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908628/565b1532-eecc-11e5-9eda-1cc6b3958c0c.png)

### Create OData Controller

### Play with OData URLs

### Create Search Route and Search View

### Create Search Criteria View

### Create Search Results View


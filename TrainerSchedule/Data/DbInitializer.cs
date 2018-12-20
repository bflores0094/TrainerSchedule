using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainerSchedule.Models;

namespace TrainerSchedule.Data
{
    public class DbInitializer
    {
        public static void Initialize(Context context)
        {
            if (context.Client.Any())
            {
                return;   // DB has been seeded
            }

            var clients = new Client[]
            {
            new Client{FirstName="Carson",LastName="Alexander",Email="CarAlex@gmail.com",Phone="111-222-3333"},
            new Client{FirstName="Ashleigh",LastName="Bayer",Email="AshBay@gmail.com",Phone="222-222-3333"},
            new Client{FirstName="Harrison",LastName="Brink",Email="HarBrink@gmail.com",Phone="333-222-3333"},
            new Client{FirstName="Cary",LastName="Gilmore",Email="CarGil@gmail.com",Phone="444-222-3333"},
            new Client{FirstName="Tim",LastName="Thayne",Email="TimThayne@gmail.com",Phone="555-222-3333"}
            };
            foreach (Client c in clients)
            {
                context.Client.Add(c);
            }
            context.SaveChanges();

            var newClients = context.Client.ToList();

            var trainers = new Trainer[]
            {
            new Trainer{FirstName="Captain",LastName="America",Email="CapAmerica@gmail.com",Phone="111-111-3333"},
            new Trainer{FirstName="Arnold",LastName="Schwarzenegger",Email="ArnSch@gmail.com",Phone="111-333-3333"},
            new Trainer{FirstName="Thor",LastName="Thor",Email="ThorThor@gmail.com",Phone="111-444-3333"},
            new Trainer{FirstName="Mark",LastName="Bell",Email="MarkBell@gmail.com",Phone="111-555-3333"}
            };
            foreach (Trainer t in trainers)
            {
                context.Trainer.Add(t);
            }
            context.SaveChanges();

            var newTrainers = context.Trainer.ToList();

            var meets = new Meet[]
            {
            new Meet{ClientID=newClients[0].ClientID,TrainerID=newTrainers[0].TrainerID,Trainer=newTrainers[0],
                Client=newClients[0],DateAndTime=DateTime.Parse("2018-12-10 2:30"),Notes="Chest day"},
            new Meet{ClientID=newClients[0].ClientID,TrainerID=newTrainers[0].TrainerID,Trainer=newTrainers[0],
                Client=newClients[0],DateAndTime=DateTime.Parse("2018-12-11 2:30"),Notes="Back day"},
            new Meet{ClientID=newClients[0].ClientID,TrainerID=newTrainers[0].TrainerID,Trainer=newTrainers[0],
                Client=newClients[0],DateAndTime=DateTime.Parse("2018-12-12 2:30"),Notes="Leg day"},
            new Meet{ClientID=newClients[1].ClientID,TrainerID=newTrainers[0].TrainerID,Trainer=newTrainers[0],
                Client=newClients[1],DateAndTime=DateTime.Parse("2018-12-11 4:00"),Notes="Work on mobility."},
            new Meet{ClientID=newClients[1].ClientID,TrainerID=newTrainers[1].TrainerID,Trainer=newTrainers[1],
                Client=newClients[1],DateAndTime=DateTime.Parse("2018-12-12 4:00"),Notes="Lift Weights."},
            new Meet{ClientID=newClients[1].ClientID,TrainerID=newTrainers[1].TrainerID,Trainer=newTrainers[1],
                Client=newClients[1],DateAndTime=DateTime.Parse("2018-12-10 3:30"),Notes="Work on mobility."},
            new Meet{ClientID=newClients[2].ClientID,TrainerID=newTrainers[2].TrainerID,Trainer=newTrainers[2],
                Client=newClients[2],DateAndTime=DateTime.Parse("2018-12-13 3:30"),Notes="New Client."},
            new Meet{ClientID=newClients[3].ClientID,TrainerID=newTrainers[2].TrainerID,Trainer=newTrainers[2],
                Client=newClients[3],DateAndTime=DateTime.Parse("2018-12-13 1:00"),Notes="Getting competition ready."},
            new Meet{ClientID=newClients[4].ClientID,TrainerID=newTrainers[3].TrainerID,Trainer=newTrainers[3],
                Client=newClients[4],DateAndTime=DateTime.Parse("2018-12-13 2:00"),Notes="Give me an A Please"}

            };
            foreach (Meet m in meets)
            {
                context.Meet.Add(m);
            }
            context.SaveChanges();
        }
    }
}
        

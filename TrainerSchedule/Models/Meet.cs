using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TrainerSchedule.Models
{
    public class Meet
    {
        public int MeetID { get; set; }
        public int ClientID { get; set; }
        public int TrainerID { get; set; }
       
        [Required]
        public DateTime DateAndTime { get; set; }
        //[Required]
        //public string TrainerName { get; set; }
        public string Notes { get; set; }

        public Client Client { get; set; }
        public Trainer Trainer { get; set; }
    }
}

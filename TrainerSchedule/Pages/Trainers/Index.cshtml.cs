using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using TrainerSchedule.Models;

namespace TrainerSchedule.Pages.Trainers
{
    public class IndexModel : PageModel
    {
        private readonly TrainerSchedule.Models.Context _context;

        public IndexModel(TrainerSchedule.Models.Context context)
        {
            _context = context;
        }

        public IList<Trainer> Trainer { get;set; }

        public async Task OnGetAsync()
        {
            Trainer = await _context.Trainer.ToListAsync();
        }
    }
}

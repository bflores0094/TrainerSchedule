using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using TrainerSchedule.Models;

namespace TrainerSchedule.Pages.Meets
{
    public class IndexModel : PageModel
    {
        private readonly TrainerSchedule.Models.Context _context;

        public IndexModel(TrainerSchedule.Models.Context context)
        {
            _context = context;
        }

        public IList<Meet> Meet { get;set; }

        public async Task OnGetAsync()
        {
            Meet = await _context.Meet
                .Include(m => m.Client)
                .Include(m => m.Trainer).ToListAsync();
        }
    }
}

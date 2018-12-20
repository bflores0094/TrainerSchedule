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
    public class DeleteModel : PageModel
    {
        private readonly TrainerSchedule.Models.Context _context;

        public DeleteModel(TrainerSchedule.Models.Context context)
        {
            _context = context;
        }

        [BindProperty]
        public Meet Meet { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Meet = await _context.Meet
                .Include(m => m.Client)
                .Include(m => m.Trainer).FirstOrDefaultAsync(m => m.MeetID == id);

            if (Meet == null)
            {
                return NotFound();
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Meet = await _context.Meet.FindAsync(id);

            if (Meet != null)
            {
                _context.Meet.Remove(Meet);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}

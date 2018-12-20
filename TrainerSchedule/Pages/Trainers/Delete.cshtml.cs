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
    public class DeleteModel : PageModel
    {
        private readonly TrainerSchedule.Models.Context _context;

        public DeleteModel(TrainerSchedule.Models.Context context)
        {
            _context = context;
        }

        [BindProperty]
        public Trainer Trainer { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Trainer = await _context.Trainer.FirstOrDefaultAsync(m => m.TrainerID == id);

            if (Trainer == null)
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

            Trainer = await _context.Trainer.FindAsync(id);

            if (Trainer != null)
            {
                _context.Trainer.Remove(Trainer);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}

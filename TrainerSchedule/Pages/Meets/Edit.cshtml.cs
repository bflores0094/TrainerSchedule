using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using TrainerSchedule.Models;

namespace TrainerSchedule.Pages.Meets
{
    public class EditModel : PageModel
    {
        private readonly TrainerSchedule.Models.Context _context;

        public EditModel(TrainerSchedule.Models.Context context)
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
           ViewData["ClientID"] = new SelectList(_context.Client, "ClientID", "ClientID");
           ViewData["TrainerID"] = new SelectList(_context.Trainer, "TrainerID", "TrainerID");
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Attach(Meet).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MeetExists(Meet.MeetID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToPage("./Index");
        }

        private bool MeetExists(int id)
        {
            return _context.Meet.Any(e => e.MeetID == id);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrainerSchedule.Models;

namespace TrainerSchedule.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainersController : ControllerBase
    {
        private readonly Context _context;

        public TrainersController(Context context)
        {
            _context = context;
        }

        // GET: api/Trainers
        [HttpGet]
        public IEnumerable<Trainer> GetTrainer()
        {
            return _context.Trainer;
        }

        // GET: api/Trainers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTrainer([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var trainer = await _context.Trainer.FindAsync(id);

            if (trainer == null)
            {
                return NotFound();
            }

            return Ok(trainer);
        }

        // PUT: api/Trainers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrainer([FromRoute] int id, [FromBody] Trainer trainer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != trainer.TrainerID)
            {
                return BadRequest();
            }

            _context.Entry(trainer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrainerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }



        // POST: api/Trainers
        [HttpPost]
        public async Task<IActionResult> PostTrainer([FromBody] Trainer trainer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Trainer.Add(trainer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTrainer", new { id = trainer.TrainerID }, trainer);
        }

        // DELETE: api/Trainers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTrainer([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var trainer = await _context.Trainer.FindAsync(id);
            if (trainer == null)
            {
                return NotFound();
            }

            _context.Trainer.Remove(trainer);
            await _context.SaveChangesAsync();

            return Ok(trainer);
        }

        private bool TrainerExists(int id)
        {
            return _context.Trainer.Any(e => e.TrainerID == id);
        }
    }
}
'use client'

export function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-0 border border-border"
      aria-label="Newsletter subscription"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="you@example.com"
        className="flex-1 px-4 py-3 text-sm bg-white border-r border-black outline-none focus:bg-secondary placeholder:text-muted-foreground rounded-none"
        aria-required="true"
      />
      <button
        type="submit"
        className="px-5 py-3 text-sm font-medium bg-black text-white hover:bg-white hover:text-black border-l border-black transition-colors duration-150 whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  )
}

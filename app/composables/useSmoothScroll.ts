export function useSmoothScroll() {
  function scrollToId(id: string, offset = 100): boolean {
    if (typeof window === 'undefined') return false

    const el = document.getElementById(id)
    if (!el) return false

    const targetTop = el.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    })

    return true
  }

  return { scrollToId }
}
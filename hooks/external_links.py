"""Open the links in a shared requirements list in a new tab.

The guide writes external links as <a ... target="_blank">. The shared list
in includes/system-requirements.md is plain text (it also goes into the
learner email), so its URLs become links through pymdownx.magiclink, which
adds no target. This adds target="_blank" to those links only.
"""

import re

_BLOCK = re.compile(r'(<div class="req-list">)(.*?)(</div>)', re.S)


def _add_target(match):
    body = re.sub(r'<a (href="https?://[^"]*")', r'<a \1 target="_blank"', match.group(2))
    return match.group(1) + body + match.group(3)


def on_page_content(html, **kwargs):
    return _BLOCK.sub(_add_target, html)

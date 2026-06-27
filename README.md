---
owner: Bauhinia AI
status: draft
last_updated: 2026-06-27
confidentiality: internal-public
source: User request; public reporting on the "鹅腿阿姨" campus meme and later goose/duck labeling discussion
---

# 鹅鸭鉴定局

`鹅鸭鉴定局` is a mobile-first static browser mini-game inspired by the public "鹅腿阿姨" meme cycle.

Open `index.html` directly in a browser. No build step or network dependency is required.

## Game Loop

- 35-second rapid session tuned for vertical phone play.
- Each order shows a buyer group, a quote, and four compact evidence cards.
- The player chooses one of four handling actions:
  - 鹅腿出单
  - 鸭腿明示
  - 梗名保留
  - 先核验
- Correct decisions increase trust, score, and combo.
- Wrong labeling lowers trust and raises heat.
- The round ends when time runs out, trust reaches 0, or heat reaches 100.

## Viral Hooks

- Single-screen portrait layout for mobile sharing.
- Short-session loop built for replay.
- Deterministic challenge seed in the URL, so friends can play the same order sequence.
- Result title such as `海淀诚信腿王` or `十连鉴腿战神`.
- Copyable social post text.
- Canvas-generated PNG result poster.

## Files

- `index.html`: page structure.
- `styles.css`: responsive UI and visual treatment.
- `app.js`: game state, scoring, order generation, sharing, poster generation.

## Tone And Safety

The game uses fictionalized groups and order scenarios. It does not name or depict a real individual, does not include private chat records, and keeps the joke focused on transparent labeling rather than attacking a person.

## Public Reference Sources

- CCTV, 2023-11-29: `https://edu.cctv.com/2023/11/29/ARTIfRhHHtnEfqmx7kjZ37IO231129.shtml`
- Xinhua app / Haidian market regulator notice, 2026-06-11: `https://app.xinhuanet.com/news/article.html?articleId=202606115d1adddc67234eb2a46cdc72a34c37d5`

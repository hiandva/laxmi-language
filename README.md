# Laxmi Language Service — サイト

英語・ヒンディー語の個人レッスンおよび文化体験のPR用静的サイトです。

## 公開URL（GitHub Pages）

`main` ブランチへマージ後、次のURLで公開されます。

https://hiandva.github.io/Projects_Root/

## ローカルプレビュー

```bash
cd _Codex_Drafts/LaxmiLanguage_Site
python3 -m http.server 8080
```

ブラウザで http://localhost:8080/ を開きます。

## デプロイ

`.github/workflows/deploy-laxmi-site.yml` が `_Codex_Drafts/LaxmiLanguage_Site/` の変更を GitHub Pages へ自動デプロイします。

初回のみ、リポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定してください。

## 未確定（任意）

- 講師写真（現在はイニシャル表示）
- 料金表の掲載
- 独自ドメインの設定

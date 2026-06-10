# サイト用写真フォルダ

## 必要なファイル

| ファイル名 | 用途 | 状態 |
|-----------|------|------|
| `vandana-profile.jpg` | 講師プロフィール・ヒーロー | 実写あり |
| `gallery-cooking.jpg` | ギャラリー：インド料理 | **実写に差し替え推奨** |
| `gallery-culture.jpg` | ギャラリー：文化体験 | **実写に差し替え推奨** |
| `gallery-lesson.jpg` | ギャラリー：レッスン風景（任意） | 未設定可 |
| `laxmi-logo.png` | ロゴ・ファビコン | あり |

推奨: 横 1200px 以下、JPG、1枚 500KB 以下

---

## Google Photos から取り込む手順

こちら（Cloud Agent）から Google Photos のブラウザには**アクセスできません**。
井川さんの Mac で次の操作をお願いします。

### 1. Google Photos で写真を選ぶ

1. https://photos.google.com を開く（ログイン済みならそのまま）
2. 使いたい写真をクリック
3. 右上 **︙** → **ダウンロード**

複数枚まとめて:
- 写真を選択（チェック）→ 右上 **︙** → **ダウンロード**

### 2. わかりやすい名前にリネーム（推奨）

ダウンロード後、次のように名前を付けると自動取り込みしやすいです。

- `cooking.jpg` … 料理教室
- `culture.jpg` … ヘナ・サリー・文化体験
- `lesson.jpg` … レッスン風景（任意）

`~/laxmi-photo-staging/` フォルダを作ってそこに入れてもOKです。

### 3. 自動リサイズ・配置（Mac）

```bash
mkdir -p ~/laxmi-photo-staging
# ここにダウンロードした写真を入れる（上記のファイル名で）

cd ~/Projects-temp/_Codex_Drafts/LaxmiLanguage_Site
bash scripts/prepare-photos.sh ~/laxmi-language-site
```

### 4. 公開

```bash
cd ~/laxmi-language-site
git add images/
git commit -m "photos: 実写写真を追加"
git push
```

---

## 手動で入れる場合

`~/laxmi-language-site/images/` に直接コピーし、上記ファイル名に合わせてください。

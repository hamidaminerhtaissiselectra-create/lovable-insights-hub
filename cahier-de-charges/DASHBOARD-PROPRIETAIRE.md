# Dashboard Propriétaire - Spécifications

## Principes UX/UI

- **Accessibilité seniors** : textes lisibles (min 16px), contrastes élevés, boutons larges, navigation simple
- **Couleurs** : Respecter le thème DogWalking (vert sauge primary, bleu océan accent)
- **Animations** : Fluides avec framer-motion, non distrayantes
- **Responsive** : Mobile-first avec tabs en bas sur mobile

---

## Onglets du Dashboard

### 1. Accueil (Aperçu)
- Statistiques : réservations, chiens, dépenses, favoris
- Actions rapides : ajouter chien, trouver promeneur, réserver
- Prochaines réservations avec détails
- Notifications importantes
- Complétion du profil

### 2. Mes Chiens
- Liste des chiens avec photo, nom, race, âge, poids
- Formulaire d'ajout/modification
- Photo du chien (upload vers Supabase Storage)
- Informations santé : vaccinations, traitements
- Tempérament et besoins spéciaux

### 3. Réservations (Missions)
- Onglets : À venir, Passées, Annulées
- Export calendrier (ICS, Google Calendar)
- Actions : message, avis, annulation (jusqu'à 3h avant)
- Affichage : chien, service, date, heure, prix, statut

### 4. Promeneurs Favoris
- Liste des promeneurs sauvegardés
- Note, tarif, ville, services
- Actions : réserver, message, retirer favori

### 5. Messages
- Conversations avec promeneurs
- Temps réel via Supabase
- Recherche dans les conversations
- Indicateur messages non lus

### 6. Parrainage
- Code unique généré automatiquement
- Partage (copier, partager natif)
- Historique des parrainages
- Statistiques : invitations, complétés, gains

### 7. Profil
- Photo de profil (upload)
- Informations personnelles : nom, téléphone, ville
- Bio / présentation
- Paramètres avancés : notifications, confidentialité
- CNI obligatoire (à venir)
- Déconnexion

---

## Validation Documents

- Carte d'identité obligatoire pour activer le compte
- Accord de principe obligatoire à l'inscription
- Validation manuelle par admin (interface admin reportée)

---

## Suivi de Mission (Sans GPS)

- Réception des photos/vidéos obligatoires de prise en charge
- Notification début et fin de mission
- Photos en fin de mission si demandé
- Rapport automatique généré

---

## Style et Design

```css
/* Couleurs principales */
--primary: hsl(142, 76%, 36%);      /* Vert sauge */
--accent: hsl(200, 98%, 39%);        /* Bleu océan */
--background: hsl(0, 0%, 100%);
--muted: hsl(220, 14%, 96%);

/* Gradients */
--gradient-primary: linear-gradient(135deg, primary, accent);

/* Ombres */
--shadow-card: 0 8px 30px -6px hsl(primary / 0.15);
```

---

## Composants Utilisés

- Card, Button, Badge, Avatar (shadcn/ui)
- Tabs pour navigation onglets
- Sheet pour formulaires latéraux
- Motion (framer-motion) pour animations
- Toast pour notifications

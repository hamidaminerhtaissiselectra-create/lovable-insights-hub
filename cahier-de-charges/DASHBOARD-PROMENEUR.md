# Dashboard Promeneur - Spécifications

## Principes UX/UI

- **Accessibilité seniors** : textes lisibles (min 16px), contrastes élevés, boutons larges, navigation simple
- **Couleurs** : Respecter le thème DogWalking (vert sauge primary, bleu océan accent)
- **Animations** : Fluides avec framer-motion, non distrayantes
- **Responsive** : Mobile-first avec tabs en bas sur mobile

---

## Onglets du Dashboard

### 1. Tableau de Bord (Aperçu)
- Statistiques animées : gains du mois, promenades, note, taux acceptation
- Alerte actions requises (demandes en attente)
- Nouvelles demandes avec actions Accepter/Refuser
- Timeline activité récente
- Prochaines missions confirmées
- Badge / progression vers badges

### 2. Réservations (Missions)
- Onglets : En attente, Confirmées, En cours, Terminées
- Actions par statut :
  - En attente : Accepter / Refuser
  - Confirmées/En cours : Message, Incident, Annuler, SOS
- Bouton "Prise en charge" avec photo obligatoire
- Envoi preuves pendant/fin mission

### 3. Gains
- Solde disponible (prêt à retirer)
- En attente (libéré après 48h)
- Total gagné depuis le début
- Évolution mensuelle avec graphique
- Historique des transactions
- Commission 13% affichée
- Bouton demande de retrait

### 4. Disponibilités
- Calendrier hebdomadaire
- Jours disponibles (toggle)
- Plages horaires (début/fin)
- Sauvegarde automatique

### 5. Messages
- Conversations avec propriétaires
- Temps réel via Supabase
- Anonymat préservé
- Bouton urgence

### 6. Performance
- Note moyenne détaillée
- Taux de complétion
- Temps de réponse moyen
- Badges gagnés et à débloquer
- Avis clients récents

### 7. Profil
- Photo de profil (upload)
- Informations personnelles
- Bio / présentation publique
- **Sous-onglets :**
  - Profil public
  - Tarifs (configuration services)
  - Documents obligatoires
  - Paramètres

---

## Documents Obligatoires

- **Carte d'identité** : obligatoire
- **Casier judiciaire B2** : obligatoire
- **Assurance RC** : obligatoire
- Upload via Supabase Storage (bucket: walker-documents)
- Validation manuelle par admin avant activation

---

## Système de Preuves Photo

### Prise en charge
1. Bouton "Prise en charge" dans les missions confirmées
2. Photo obligatoire de l'animal au départ
3. Notification envoyée au propriétaire
4. Statut booking → "in_progress"

### Fin de mission
1. Photo obligatoire pour valider la mission
2. Envoi au propriétaire
3. Déblocage du paiement (si pas de preuve → paiement bloqué)
4. Statut booking → "completed"

---

## Communication

- Messagerie intégrée anonyme (pas de numéro visible)
- Bouton SOS pour urgences
- Signalement incidents (retard, absence, problème)

---

## Finances

- Gains nets après commission 13%
- Historique détaillé par mission
- Paiement libéré 48h après mission
- Retrait sous 2-3 jours ouvrés

---

## Style et Design

```css
/* Couleurs principales */
--primary: hsl(142, 76%, 36%);      /* Vert sauge */
--accent: hsl(200, 98%, 39%);        /* Bleu océan */

/* Couleurs gains */
--success: hsl(142, 76%, 40%);       /* Vert pour gains */
--warning: hsl(45, 93%, 47%);        /* Ambre pour en attente */

/* Gradients */
--gradient-success: linear-gradient(to-r, green-500, emerald-600);
```

---

## Composants Utilisés

- AnimatedStatsCard pour statistiques
- ActivityTimeline pour historique
- EarningsChart pour graphique gains
- SOSButton pour urgences
- DocumentUpload pour documents
- PricingSettings pour tarifs

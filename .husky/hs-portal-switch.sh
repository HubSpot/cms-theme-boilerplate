#!/bin/bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)

case "$BRANCH" in
  insurance-theme)
    hs auth use --portal=3475345
    echo "✅ Switched to HubSpot portal for Insurance (3475345)"
    ;;
  main)
    echo "ℹ️  Main branch detected. No portal switch needed."
    ;;
  *)
    echo "⚠️  No HubSpot portal mapping for branch '$BRANCH'. Skipping switch."
    ;;
esac
